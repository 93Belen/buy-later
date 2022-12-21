package com.example.buy_later.repository;

import com.example.buy_later.model.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Integer> {

    Iterable<Item> findByOrderByDayToBeReminded();
}
