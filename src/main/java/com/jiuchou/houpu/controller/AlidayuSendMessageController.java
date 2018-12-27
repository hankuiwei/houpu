package com.jiuchou.houpu.controller;

import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.jiuchou.houpu.HoupuApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;


@CrossOrigin
@Controller
@RequestMapping("/message")
public class AlidayuSendMessageController {
    /**
     * @api {post}  /message/ycode    获取手机验证码
     * @apiVersion 0.1.0
     * @apiName message/ycode
     * @apiGroup message
     * @apiDescription 获取手机验证码
     * @apiExample
     * @apiParam {String} tel   手机号
     * @apiSuccess {String} status=200
     */



    @RequestMapping(value = "/ycode", method = RequestMethod.POST)
    @ResponseBody
    public int sendMessage(HttpServletRequest reqt, String tel, HttpSession session)
            throws Exception {
        // 官网的URL
        String url = "http://gw.api.taobao.com/router/rest";
        // 成为开发者，创建应用后系统自动生成
        String appkey = "23633603";
        String secret = "1a52fb90dd0c8c1341835f828ddae713";
        Random random = new Random();
        int x = random.nextInt(999999);
        session.removeAttribute("ycodes");
        HoupuApplication.setCode(""+x);
        //session.setAttribute("ycodes",x);
        // 短信模板的内容
        StringBuilder jsons = new StringBuilder();
        jsons.append("{");
        jsons.append("\"code\":" + "\"" + x + "\",");
        jsons.append("\"product\":" + "\"" + "厚朴教育" + "\"");
        jsons.append("}");
        String jsonstr = jsons.toString();

        TaobaoClient client = new DefaultTaobaoClient(url, appkey, secret);
        AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
        //req.setExtend("厚朴教育");
        req.setSmsType("normal");
        req.setSmsFreeSignName("厚朴教育");
        req.setSmsParamString(jsonstr);
        req.setRecNum(tel);
        req.setSmsTemplateCode("SMS_53015044");
        try {
            AlibabaAliqinFcSmsNumSendResponse rsp = client.execute(req);
            System.out.println(rsp.getBody());
            return x;
        } catch (Exception e) {
            // TODO: handle exception
            return 0;
        }
    }
	/*public static void main(String[] args) {
		AlidayuSendMessageController alidayuSendMessageController = new AlidayuSendMessageController();
		try {
			alidayuSendMessageController.sendMessage("17710435886");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}*/

}
