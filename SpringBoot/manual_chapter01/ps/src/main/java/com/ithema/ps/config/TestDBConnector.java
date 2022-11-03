package com.ithema.ps.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("test")//指定多环境配置类标识
public class TestDBConnector implements DBConnector {
    @Override
    public void configure() {
        System.out.println("数据库配置环境test");
    }
}
