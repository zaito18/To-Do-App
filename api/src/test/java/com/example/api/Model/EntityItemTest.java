package com.example.api.Model;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;


import javax.persistence.EntityManager;
import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class EntityItemTest {


        @Autowired private EntityManager entityManager;

    @Test
    public void ItemCanBePersisted(){

            Item item1=givenAnItem();
            whenPersistTheItem(item1);
            thatVerifyItExistsInDb(item1);


    }

    private void thatVerifyItExistsInDb(Item item1) {
assertThat(entityManager.contains(item1)).isTrue();

    }

    private void whenPersistTheItem(Item item1) {
        entityManager.persist(item1);
    }

    private Item givenAnItem() {
        Item item = new Item();
        item.setTask("Practice Guitar");
        return item;
    }

}
