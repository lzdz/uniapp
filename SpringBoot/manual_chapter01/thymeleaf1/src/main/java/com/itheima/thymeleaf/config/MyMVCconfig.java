package com.itheima.thymeleaf.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 实现WebMvcConfigurer接口，扩展MVC功能
 */
@Configuration
public class MyMVCconfig implements WebMvcConfigurer {
    @Autowired
    private MyInterceptor myInterceptor;
    //添加视图管理
    @Override
    public void addViewControllers(ViewControllerRegistry registry){
        //请求toLoginPage映射路径或者login.html页面都会自动映射到login.html页面
        registry.addViewController("/toLoginPage").setViewName("login");
        registry.addViewController("login.html").setViewName("login");
    }

    //添加拦截器管理
    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(myInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/login.html");
    }
}
