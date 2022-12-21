package com.example.buy_later.controller;

import com.example.buy_later.model.Bought;
import com.example.buy_later.model.Item;
import com.example.buy_later.repository.BoughtRepository;
import com.example.buy_later.repository.ItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


@org.springframework.stereotype.Controller
public class Controller {

    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private BoughtRepository boughtRepository;

    @PostMapping("/addItem")
    @CrossOrigin("http://localhost:3000")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void addItem(@RequestParam String name, @RequestParam String description, @RequestParam String dayWillBuy){
        System.out.println("post request");
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Calendar c = Calendar.getInstance();
        c.setTime(new Date()); // Using today's date
        c.add(Calendar.DATE, Integer.parseInt(dayWillBuy)); // Adding days
        String dayTobeReminded = sdf.format(c.getTime());
        Item newItem = new Item(name, description, c.getTime(), dayWillBuy, dayTobeReminded);
        itemRepository.save(newItem);

    }
    @PostMapping("/addBought")
    @CrossOrigin("http://localhost:3000")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void addBought(@RequestParam int id, @RequestParam String name, @RequestParam String description){
        System.out.println("post request");
        Bought newBought = new Bought(id, name, description);
        boughtRepository.save(newBought);
    }

    @GetMapping("/getItems")
    @CrossOrigin("http://localhost:3000")
    @ResponseBody
    public Iterable<Item> getItems(){
        System.out.println("get request");
        Iterable<Item> listOfItems = itemRepository.findByOrderByDayToBeReminded();
        return listOfItems;
    }

    @GetMapping("/getBought")
    @CrossOrigin("http://localhost:3000")
    @ResponseBody
    public Iterable<Bought> getBought(){
        System.out.println("get request");
        return boughtRepository.findFirst10ByOrderByIdDesc();
    }


    @DeleteMapping("/deleteItem/{id}")
    @CrossOrigin("http://localhost:3000")
    @ResponseStatus(value = HttpStatus.ACCEPTED)
    public void getItemId(@PathVariable int id){
        System.out.println("delete request");
        if(itemRepository.existsById(id)){
            itemRepository.deleteById(id);
        }
    }

    @DeleteMapping("/deleteFromBought/{id}")
    @CrossOrigin("http://localhost:3000")
    @ResponseStatus(value = HttpStatus.ACCEPTED)
    public void getBoughtId(@PathVariable int id){
        System.out.println("delete request");
        if(boughtRepository.existsById(id)){
            boughtRepository.deleteById(id);
        }
    }
}
