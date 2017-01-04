package com.sun.plate.websocket;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 * Created by sun on 2016/12/28.
 */
@ServerEndpoint(value = "/platecaptcha")
@Component
public class PlateCaptchaWebSocket {

    private Logger logger = LoggerFactory.getLogger(PlateCaptchaWebSocket.class);

    @OnOpen
    public void onOpen(Session session) {

        logger.info("有新连接加入！参数:{}",session.getPathParameters());
    }

    
}
