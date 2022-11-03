package com.ithema.ps;

import com.ithema.ps.domain.MyProperties;
import com.ithema.ps.domain.Person;
import com.ithema.ps.domain.Student;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootTest
class PsApplicationTests {

    @Autowired
    private Person person;

    @Test
    void contextLoads() {
        System.out.println(person);
    }

    @Autowired
    private Student student;

    @Test
    public void studentTest() {
        System.out.println(student);
    }

    @Autowired
    private MyProperties myProperties;

    @Test
    public void myPropertiesTest() {
        System.out.println(myProperties);
    }

    @Autowired
    private ApplicationContext applicationContext;

    @Test
    public void iocTest() {
        System.out.println(applicationContext.containsBean("myService"));
    }


    @Autowired
    @Value("${tom.description}")
    private String description;

    @Test
    public void placeholderTest() {
        System.out.println(description);
    }
}
