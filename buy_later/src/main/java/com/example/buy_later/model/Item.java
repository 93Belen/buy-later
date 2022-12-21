package com.example.buy_later.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Item {
    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String description;
    private Date datePosted;
    private String daysToRemind;

    private String dayToBeReminded;


    public Item(){}

    public Item(String name, String description, Date datePosted, String daysToRemind, String dayToBeReminded) {
        this.id = getId();
        this.name = name;
        this.description = description;
        this.datePosted = datePosted;
        this.daysToRemind = daysToRemind;
        this.dayToBeReminded = dayToBeReminded;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDaysToRemind() {
        return daysToRemind;
    }

    public void setDaysToRemind(String daysToRemind) {
        this.daysToRemind = daysToRemind;
    }

    public int getId() {
        return id;
    }

    public Date getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(Date datePosted) {
        this.datePosted = datePosted;
    }

    public String getDayToBeReminded() {
        return dayToBeReminded;
    }

    public void setDayToBeReminded(String dayToBeReminded) {
        this.dayToBeReminded = dayToBeReminded;
    }
}
