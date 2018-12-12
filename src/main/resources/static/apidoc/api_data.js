define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "I__houpu_doc_main_js",
    "groupTitle": "I__houpu_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./src/main/resources/static/apidoc/main.js",
    "group": "I__houpu_src_main_resources_static_apidoc_main_js",
    "groupTitle": "I__houpu_src_main_resources_static_apidoc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./target/classes/static/apidoc/main.js",
    "group": "I__houpu_target_classes_static_apidoc_main_js",
    "groupTitle": "I__houpu_target_classes_static_apidoc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/teacher/select",
    "title": "获取老师列表",
    "version": "0.1.0",
    "name": "teacher_select",
    "group": "Teather",
    "description": "<p>首页获取老师列表</p>",
    "examples": [
      {
        "title": "@apiParam {Number} user_id The user’s unique ID.",
        "content": "@apiParam {Number} user_id The user’s unique ID.",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/TeacherController.java",
    "groupTitle": "Teather",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/teacher/select"
      }
    ]
  },
  {
    "type": "post",
    "url": "/teacher/selectById",
    "title": "根据ID获取老师详情",
    "version": "0.1.0",
    "name": "teacher_selectById",
    "group": "Teather",
    "description": "<p>根据ID获取老师详情</p>",
    "examples": [
      {
        "title": "@apiParam {String} tid 主键tid",
        "content": "@apiParam {String} tid 主键tid",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/TeacherController.java",
    "groupTitle": "Teather",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/teacher/selectById"
      }
    ]
  },
  {
    "type": "get",
    "url": "/article/select",
    "title": "获取所有轮播图集合",
    "version": "0.1.0",
    "name": "article_select",
    "group": "article",
    "description": "<p>获取所有轮播图集合</p>",
    "examples": [
      {
        "title": "@apiSuccess {String} status=200",
        "content": "@apiSuccess {String} status=200",
        "type": "json"
      }
    ],
    "filename": "./src/main/java/com/jiuchou/houpu/controller/ArticleImgController.java",
    "groupTitle": "article",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/article/select"
      }
    ]
  },
  {
    "type": "post",
    "url": "/comment/insert",
    "title": "添加评论",
    "version": "0.1.0",
    "name": "comment_insert",
    "group": "comment",
    "description": "<p>添加评论</p>",
    "examples": [
      {
        "title": "@apiParam {Object}  comment  获取前段数据以对象返回",
        "content": "@apiParam {Object}  comment  获取前段数据以对象返回",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/CommentController.java",
    "groupTitle": "comment",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/comment/insert"
      }
    ]
  },
  {
    "type": "post",
    "url": "/comment/selectByGid",
    "title": "通过课程id查询所有评论",
    "version": "0.1.0",
    "name": "comment_selectByGid",
    "group": "comment",
    "description": "<p>通过课程id查询所有评论</p>",
    "examples": [
      {
        "title": "@apiParam {String} gid 关联课程id",
        "content": "@apiParam {String} gid 关联课程id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/CommentController.java",
    "groupTitle": "comment",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/comment/selectByGid"
      }
    ]
  },
  {
    "type": "post",
    "url": "/coupon/insert",
    "title": "添加优惠券",
    "version": "0.1.0",
    "name": "coupon_insert",
    "group": "coupon",
    "description": "<p>添加优惠券</p>",
    "examples": [
      {
        "title": "@apiParam {Number} user_id The user’s unique ID.",
        "content": "@apiParam {Number} user_id The user’s unique ID.",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/CouponController.java",
    "groupTitle": "coupon",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/coupon/insert"
      }
    ]
  },
  {
    "type": "post",
    "url": "/coupon/selectByUid",
    "title": "通过关联的用户id查询用户所有的优惠券列表",
    "version": "0.1.0",
    "name": "coupon_selectByUid",
    "group": "coupon",
    "description": "<p>通过关联的用户id查询用户所有的优惠券列表</p>",
    "examples": [
      {
        "title": "@apiParam {String} uid  关联用户的id",
        "content": "@apiParam {String} uid  关联用户的id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/CouponController.java",
    "groupTitle": "coupon",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/coupon/selectByUid"
      }
    ]
  },
  {
    "type": "post",
    "url": "/course/recommend",
    "title": "推荐课程",
    "version": "0.1.0",
    "name": "course_recommend",
    "group": "course",
    "description": "<p>推荐课程</p>",
    "examples": [
      {
        "title": "@apiParam {String} userid 用户id",
        "content": "@apiParam {String} userid 用户id",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "etid",
            "description": "<p>试卷id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/recommend"
      }
    ]
  },
  {
    "type": "get",
    "url": "/course/select",
    "title": "获取所有课程",
    "version": "0.1.0",
    "name": "course_select",
    "group": "course",
    "description": "<p>获取所有课程</p>",
    "examples": [
      {
        "title": "@apiParam {Number} user_id The user’s unique ID.",
        "content": "@apiParam {Number} user_id The user’s unique ID.",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/select"
      }
    ]
  },
  {
    "type": "get",
    "url": "/course/selectByCreatTime",
    "title": "通过时间降序来选取热门课程",
    "version": "0.1.0",
    "name": "course_selectByCreatTime",
    "group": "course",
    "description": "<p>通过时间降序来选取热门课程</p>",
    "examples": [
      {
        "title": "@apiParam {Number} user_id The user’s unique ID.",
        "content": "@apiParam {Number} user_id The user’s unique ID.",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/selectByCreatTime"
      }
    ]
  },
  {
    "type": "post",
    "url": "/course/selectById",
    "title": "通过ID获取课程详情章节列表",
    "version": "0.1.0",
    "name": "course_selectById",
    "group": "course",
    "description": "<p>通过ID获取课程详情章节列表</p>",
    "examples": [
      {
        "title": "@apiParam {String} gid 主键gid",
        "content": "@apiParam {String} gid 主键gid",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/selectById"
      }
    ]
  },
  {
    "type": "post",
    "url": "/course/selectByKind",
    "title": "课程三级分类查询",
    "version": "0.1.0",
    "name": "course_selectByKind",
    "group": "course",
    "description": "<p>课程三级分类查询</p>",
    "examples": [
      {
        "title": "@apiParam {String} gsbuject 课程分类",
        "content": "@apiParam {String} gsbuject 课程分类",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gclass",
            "description": "<p>年级分类</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gclassify",
            "description": "<p>专题（长期）分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/selectByKind"
      }
    ]
  },
  {
    "type": "post",
    "url": "/course/selectByMoney",
    "title": "0元体验列表",
    "version": "0.1.0",
    "name": "course_selectByMoney",
    "group": "course",
    "description": "<p>0元体验列表</p>",
    "examples": [
      {
        "title": "@apiParam {String} gmoney  课程价格",
        "content": "@apiParam {String} gmoney  课程价格",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/selectByMoney"
      }
    ]
  },
  {
    "type": "post",
    "url": "/course/selectByTeacherId",
    "title": "老师详情页主讲课程查询",
    "version": "0.1.0",
    "name": "course_selectByTeacherId",
    "group": "course",
    "description": "<p>老师详情页主讲课程查询</p>",
    "examples": [
      {
        "title": "@apiParam {String} tid  教师id",
        "content": "@apiParam {String} tid  教师id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/selectByTeacherId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/course/selectByValue",
    "title": "课程模糊查询",
    "version": "0.1.0",
    "name": "course_selectByValue",
    "group": "course",
    "description": "<p>课程模糊查询</p>",
    "examples": [
      {
        "title": "@apiParam {String} gname 用户输入字符串",
        "content": "@apiParam {String} gname 用户输入字符串",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/selectByValue"
      }
    ]
  },
  {
    "type": "get",
    "url": "/course/selectKillEndTime",
    "title": "限时促销",
    "version": "0.1.0",
    "name": "course_selectKillEndTime",
    "group": "course",
    "description": "<p>限时促销</p>",
    "examples": [
      {
        "title": "@apiParam {Number} user_id The user’s unique ID.",
        "content": "@apiParam {Number} user_id The user’s unique ID.",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/GeneralvideoController.java",
    "groupTitle": "course",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/course/selectKillEndTime"
      }
    ]
  },
  {
    "type": "post",
    "url": "/errorquestions/selectByUid",
    "title": "通过用户id查询错题",
    "version": "0.1.0",
    "name": "errorquestions_selectByUid",
    "group": "errorquestions",
    "description": "<p>通过用户id查询错题</p>",
    "examples": [
      {
        "title": "@apiParam {String} uid  用户id",
        "content": "@apiParam {String} uid  用户id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/ErrorQuestionsController.java",
    "groupTitle": "errorquestions",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/errorquestions/selectByUid"
      }
    ]
  },
  {
    "type": "get",
    "url": "/exam/selectAll",
    "title": "查询所有试题",
    "version": "0.1.0",
    "name": "exam_selectAll",
    "group": "exam",
    "description": "<p>查询所有试题</p>",
    "examples": [
      {
        "title": "@apiParam {Number} user_id The user’s unique ID.",
        "content": "@apiParam {Number} user_id The user’s unique ID.",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/ExamController.java",
    "groupTitle": "exam",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/exam/selectAll"
      }
    ]
  },
  {
    "type": "post",
    "url": "/exam/selectAnswer",
    "title": "分数统计并添加错题",
    "version": "0.1.0",
    "name": "exam_selectAnswer",
    "group": "exam",
    "description": "<p>分数统计并添加错题</p>",
    "examples": [
      {
        "title": "@apiParam {Exam}  前端返回对象",
        "content": "@apiParam {Exam}  前端返回对象",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/ExamController.java",
    "groupTitle": "exam",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/exam/selectAnswer"
      }
    ]
  },
  {
    "type": "post",
    "url": "/exam/selectByTxt",
    "title": "模糊查询",
    "version": "0.1.0",
    "name": "exam_selectByTxt",
    "group": "exam",
    "description": "<p>模糊查询</p>",
    "examples": [
      {
        "title": "@apiParam {String} s 页面输入的字段",
        "content": "@apiParam {String} s 页面输入的字段",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/ExamController.java",
    "groupTitle": "exam",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/exam/selectByTxt"
      }
    ]
  },
  {
    "type": "post",
    "url": "/exam/selectExamHistoy",
    "title": "查询我做过的题目",
    "version": "0.1.0",
    "name": "exam_selectExamHistoy",
    "group": "exam",
    "description": "<p>查询我做过的题目</p>",
    "examples": [
      {
        "title": "@apiParam {String} uid The 关联用户id",
        "content": "@apiParam {String} uid The 关联用户id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/ExamController.java",
    "groupTitle": "exam",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/exam/selectExamHistoy"
      }
    ]
  },
  {
    "type": "post",
    "url": "/message/ycode",
    "title": "获取手机验证码",
    "version": "0.1.0",
    "name": "message_ycode",
    "group": "message",
    "description": "<p>获取手机验证码</p>",
    "examples": [
      {
        "title": "@apiParam {String} tel   手机号",
        "content": "@apiParam {String} tel   手机号",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/AlidayuSendMessageController.java",
    "groupTitle": "message",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/message/ycode"
      }
    ]
  },
  {
    "type": "get",
    "url": "/orders/selectAll",
    "title": "查询所有订单信息",
    "version": "0.1.0",
    "name": "orders_selectAll",
    "group": "orders",
    "description": "<p>查询所有订单信息</p>",
    "examples": [
      {
        "title": "@apiParam {Number} user_id The user’s unique ID.",
        "content": "@apiParam {Number} user_id The user’s unique ID.",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/OrdersController.java",
    "groupTitle": "orders",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/orders/selectAll"
      }
    ]
  },
  {
    "type": "post",
    "url": "/orders/selectByPay",
    "title": "通过状态查询已支付、未支付",
    "version": "0.1.0",
    "name": "orders_selectByPay",
    "group": "orders",
    "description": "<p>通过状态查询已支付和未支付</p>",
    "examples": [
      {
        "title": "@apiParam {String} oisPay   支付状态（“0”未支付，“1”已支付）",
        "content": "@apiParam {String} oisPay   支付状态（“0”未支付，“1”已支付）",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/OrdersController.java",
    "groupTitle": "orders",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/orders/selectByPay"
      }
    ]
  },
  {
    "type": "post",
    "url": "/questions/select",
    "title": "查询某试卷下的所有试题",
    "version": "0.1.0",
    "name": "questions_select",
    "group": "questions",
    "description": "<p>查询某试卷下的所有试题</p>",
    "examples": [
      {
        "title": "@apiParam {String} etid 试卷id",
        "content": "@apiParam {String} etid 试卷id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/QuestionsController.java",
    "groupTitle": "questions",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/questions/select"
      }
    ]
  },
  {
    "type": "post",
    "url": "/stuimg/selectByProthyId",
    "title": "通过关联学员id获取学员证书图片",
    "version": "0.1.0",
    "name": "stuimg_selectByProthyId",
    "group": "student",
    "description": "<p>通过关联学员id获取学员证书图片</p>",
    "examples": [
      {
        "title": "@apiParam {String} pid  关联学员id",
        "content": "@apiParam {String} pid  关联学员id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/StuImgController.java",
    "groupTitle": "student",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/stuimg/selectByProthyId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/trophy/select",
    "title": "获取所有学员",
    "version": "0.1.0",
    "name": "trophy_select",
    "group": "student",
    "description": "<p>获取所有学员</p>",
    "examples": [
      {
        "title": "@apiParam {Number} user_id The user’s unique ID.",
        "content": "@apiParam {Number} user_id The user’s unique ID.",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/TrophyController.java",
    "groupTitle": "student",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/trophy/select"
      }
    ]
  },
  {
    "type": "post",
    "url": "/trophy/selectById",
    "title": "通过ID获取学员详情",
    "version": "0.1.0",
    "name": "trophy_selectById",
    "group": "student",
    "description": "<p>通过ID获取学员详情</p>",
    "examples": [
      {
        "title": "@apiParam {String}  pid  主键",
        "content": "@apiParam {String}  pid  主键",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/TrophyController.java",
    "groupTitle": "student",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/trophy/selectById"
      }
    ]
  },
  {
    "type": "post",
    "url": "/userlearn/insert",
    "title": "我看过的视频添加功能",
    "version": "0.1.0",
    "name": "userlearn_insert",
    "group": "userlearn",
    "description": "<p>我看过的视频添加功能</p>",
    "examples": [
      {
        "title": "@apiParam {String} userId  用户关联的id",
        "content": "@apiParam {String} userId  用户关联的id",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "learnTime",
            "description": "<p>观看时长</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "learnDate",
            "description": "<p>学习时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Generalvideo",
            "optional": false,
            "field": "generalvideo",
            "description": "<p>点击时回传课程对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/UserLearnController.java",
    "groupTitle": "userlearn",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/userlearn/insert"
      }
    ]
  },
  {
    "type": "post",
    "url": "/userlearn/select",
    "title": "我看过的视频查询",
    "version": "0.1.0",
    "name": "userlearn_select",
    "group": "userlearn",
    "description": "<p>我看过的视频查询</p>",
    "examples": [
      {
        "title": "@apiParam {String} userid   用户id",
        "content": "@apiParam {String} userid   用户id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/UserLearnController.java",
    "groupTitle": "userlearn",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/userlearn/select"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "version": "0.1.0",
    "name": "user_login",
    "group": "user",
    "description": "<p>用户登录</p>",
    "examples": [
      {
        "title": "@apiParam {String} userName   用户名",
        "content": "@apiParam {String} userName   用户名",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/UserController.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/user/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/regist",
    "title": "用户注册",
    "version": "0.1.0",
    "name": "user_regist",
    "group": "user",
    "description": "<p>用户注册</p>",
    "examples": [
      {
        "title": "@apiParam {User} user 前端回传用户对象",
        "content": "@apiParam {User} user 前端回传用户对象",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "validatacode",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/UserController.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/user/regist"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/selectById",
    "title": "通过用户id 查询展示用户信息",
    "version": "0.1.0",
    "name": "user_selectById",
    "group": "user",
    "description": "<p>通过用户id 查询展示用户信息</p>",
    "examples": [
      {
        "title": "@apiParam {String} uid   主键用户id",
        "content": "@apiParam {String} uid   主键用户id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/UserController.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/user/selectById"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/updateHeadImgUrl",
    "title": "修改用户头像",
    "version": "0.1.0",
    "name": "user_updateHeadImgUrl",
    "group": "user",
    "description": "<p>修改用户头像</p>",
    "examples": [
      {
        "title": "@apiParam {String} uid  用户id",
        "content": "@apiParam {String} uid  用户id",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headImgUrl",
            "description": "<p>修改的头像</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/UserController.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/user/updateHeadImgUrl"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/updateUserName",
    "title": "修改用户昵称s",
    "version": "0.1.0",
    "name": "user_updateUserName",
    "group": "user",
    "description": "<p>修改用户昵称</p>",
    "examples": [
      {
        "title": "@apiParam {String} uid  用户id",
        "content": "@apiParam {String} uid  用户id",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>修改的名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/UserController.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/user/updateUserName"
      }
    ]
  },
  {
    "type": "post",
    "url": "/videochild/select",
    "title": "通过课程id获取对应章节",
    "version": "0.1.0",
    "name": "videoChild_select",
    "group": "videoChild",
    "description": "<p>通过课程id获取对应章节</p>",
    "examples": [
      {
        "title": "@apiParam {String} gid   课程id",
        "content": "@apiParam {String} gid   课程id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/VideoChildController.java",
    "groupTitle": "videoChild",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/videochild/select"
      }
    ]
  },
  {
    "type": "post",
    "url": "/videoPdf/select",
    "title": "通过视频id获取对应讲义",
    "version": "0.1.0",
    "name": "videoPdf_select",
    "group": "videoPdf",
    "description": "<p>通过视频id获取对应讲义</p>",
    "examples": [
      {
        "title": "@apiParam {String} vcid  视频id",
        "content": "@apiParam {String} vcid  视频id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/VideoPdfController.java",
    "groupTitle": "videoPdf",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/videoPdf/select"
      }
    ]
  },
  {
    "type": "post",
    "url": "/videoTest/select",
    "title": "通过视频id获取对应测试",
    "version": "0.1.0",
    "name": "videoTest_select",
    "group": "videoTest",
    "description": "<p>通过视频id获取对应测试</p>",
    "examples": [
      {
        "title": "@apiParam {String} vcid  视频id",
        "content": "@apiParam {String} vcid  视频id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/com/jiuchou/houpu/controller/VideoTestController.java",
    "groupTitle": "videoTest",
    "sampleRequest": [
      {
        "url": "http://www.houpuclass.com:8089/videoTest/select"
      }
    ]
  }
] });