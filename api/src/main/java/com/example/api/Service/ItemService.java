package com.example.api.Service;

import com.example.api.Model.Item;
import com.example.api.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private final ItemRepository repositoryItem;

    @Autowired
    public ItemService(ItemRepository repositoryItem) {
        this.repositoryItem = repositoryItem;
    }

    public Item addItem(Item item){
       return  repositoryItem.save(item);
    }

    public List<Item> findAllItems() {
        return repositoryItem.findAll();
    }

    public void deleteItem(Long id) {
        repositoryItem.deleteById(id);
    }

}

