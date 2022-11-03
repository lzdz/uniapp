package com.atguigu.hello.boot;

import com.atguigu.hello.boot.controller.HelloController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

//@RunWith(SpringRunner.class)//测试运行器，并加Spring Boot测试注解
@SpringBootTest
//标记单元测试类，并加载项目的上下文ApplicationContext
class BootApplicationTests {
    //自动创建的单元测试方法示例
    @Test
    void contextLoads() {
    }

    @Autowired
    private HelloController helloController;

    @Test
    public void HelloControllerTest() {
        String hello = helloController.hello();
        System.out.println(hello);
    }


}
