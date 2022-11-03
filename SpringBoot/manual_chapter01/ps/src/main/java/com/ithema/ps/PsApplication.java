package com.ithema.ps;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

//@ImportResource("classpath:beans.xml") //加载自定义XML配置文件位置
@SpringBootApplication
public class PsApplication {

    public static void main(String[] args) {
        SpringApplication.run(PsApplication.class, args);
    }

}
