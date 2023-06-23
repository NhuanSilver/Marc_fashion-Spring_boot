package com.marc_fashion.order;

import com.marc_fashion.cart.Cart;
import com.marc_fashion.cart.CartRepository;
import com.marc_fashion.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService implements IOrderService {
    private final CartRepository cartRepository;
    private final OrderRepository orderRepository;
    private final OrderDTOMapper orderDTOMapper;
    @Override
    public OrderDTO placeOrder(PlaceOrder request) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (user == null) throw new RuntimeException();
        Cart cart = cartRepository.findByUserId(user.getId()).orElseThrow();

        Order order = Order.builder()
                .user(user)
                .address(request.getAddress())
                .note(request.getNote())
                .phoneNumber(request.getPhoneNumber())
                .email(request.getEmail())
                .username(request.getUsername())
                .build();
        List<OrderItem> orderItems = cart.getItems()
                .stream()
                .map(item -> OrderItem.builder()
                        .product(item.getProduct())
                        .order(order)
                        .variant(item.getVariant())
                        .quantity(item.getQuantity())
                        .build())
                .collect(Collectors.toList());
        order.setOrderItems(orderItems);
        cartRepository.delete(cart);
        return orderDTOMapper.toDTO(orderRepository.save(order));
    }
}
