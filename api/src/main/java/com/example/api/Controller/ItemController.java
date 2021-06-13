package com.example.api.Controller;

import com.example.api.Model.Item;
import com.example.api.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/items")
public class ItemController {


    private final ItemService serviceItem;

    @Autowired
    public ItemController(ItemService serviceItem) {
        this.serviceItem = serviceItem;
    }

    @GetMapping
    public ResponseEntity<List<Item>> getAllItems(){
        return new  ResponseEntity<>(serviceItem.findAllItems(),HttpStatus.OK);
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Item> addItem(@RequestBody Item item){
    Item newItem = serviceItem.addItem(item);
    return new ResponseEntity<>(newItem,HttpStatus.CREATED);
    }

    @PutMapping("/edit")
        public ResponseEntity<Item>editItem(@RequestBody Item item){
        Item editItem = serviceItem.addItem(item);
        return new ResponseEntity<>(editItem,HttpStatus.OK);
    }

        @DeleteMapping(value="/delete/{id}")
        public ResponseEntity<Item>deleteItem(@PathVariable ("id") Long id){
        serviceItem.deleteItem(id);
        return new ResponseEntity<>(HttpStatus.OK);
        }

}
