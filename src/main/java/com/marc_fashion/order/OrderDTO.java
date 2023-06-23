package com.marc_fashion.order;
import com.marc_fashion.user.UserDTO;
import lombok.Data;

import java.util.List;

@Data
public class OrderDTO {
  private Long id;
  private UserDTO user;
  private String phoneNumber;
  private String address;
  private String username;
  private String note;
  private List<OrderItemDTO> orderItems;
}
