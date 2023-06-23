package com.marc_fashion.order;

import org.springframework.stereotype.Service;

public interface IOrderService {
    OrderDTO placeOrder(PlaceOrder request);

}
