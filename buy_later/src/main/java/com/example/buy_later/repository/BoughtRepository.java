package com.example.buy_later.repository;

import com.example.buy_later.model.Bought;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface BoughtRepository extends CrudRepository<Bought, Integer> {


    Iterable<Bought> findFirst10ByOrderByIdDesc();
}
