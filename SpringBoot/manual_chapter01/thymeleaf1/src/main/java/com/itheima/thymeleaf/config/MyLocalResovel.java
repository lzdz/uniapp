package com.itheima.thymeleaf.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.LocaleResolver;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale;

@Configuration
public class MyLocalResovel implements LocaleResolver {

    //自定义区域解析方式
    @Override
    public Locale resolveLocale(HttpServletRequest request) {
        //获取页面手动切换传递的语言参数l
        String l = request.getParameter("l");
        //获取请求头自动传递的语言参数Accept-Language
        String header = request.getHeader("Accept-Language");
        Locale locale = null;
        //如果手动切换参数不为空，就根据手动参数进行语言切换，否则默认为根据请求头信息切换
        if(!StringUtils.isEmpty(l)){
            String[] split = l.split("_");
            locale=new Locale(split[0],split[1]);
        }else{
            String[] splits = header.split(",");
            String[] split = splits[0].split("-");
            locale = new Locale(split[0],split[1]);
        }
        return locale;
    }

    @Override
    public void setLocale(HttpServletRequest request, @Nullable HttpServletResponse response, @Nullable Locale locale) {

    }

    //将自定义的MyLocalResovel类重新注册为一个类型LocaleResolver的Bean组件
    @Bean
    public LocaleResolver localeResolver(){
        return new MyLocalResovel();
    }
}
