import React from 'react';
import { Breadcrumb , Menu, Icon ,Button , Table } from 'antd';

import Addbtn from "./Addbtn.js";
const SubMenu = Menu.SubMenu;

import "./Attendancehome.less";

//考勤组 start
let columns = [
    { title: '考勤组名称', dataIndex: 'name', key: 'name' , width : 120},
    { title: '人数', dataIndex: 'nub', key: 'nub' , width : 120},
    { title: '类型', dataIndex: 'type', key: 'type' , width : 120},
    { title: '考勤时间', dataIndex: 'date', key: 'date',render: () => <div className="do"><div><span>六日</span><span>休息</span></div><div><span>一二三四五</span><span>上班</span><span>班:</span><span>9:00-18:00</span></div></div> , width : 250},
    { title: '操作', dataIndex: 'do', key: 'do' ,render: () => <div className="do"><a>编辑排班</a><a>修改规则</a><a>删除</a></div> },
];

let data = [
    { key: 1, name: '朝9晚6', nub: 32, type: '固定班制', date: '111',do:''},
    { key: 2, name: '朝9晚6', nub: 32, type: '固定班制', date: '111',do:''},
    { key: 3, name: '朝9晚6', nub: 32, type: '固定班制', date: '111',do:''},
    { key: 4, name: '朝9晚6', nub: 32, type: '固定班制', date: '111',do:''},
    { key: 5, name: '朝9晚6', nub: 32, type: '固定班制', date: '111',do:''},
    { key: 6, name: '朝9晚6', nub: 32, type: '固定班制', date: '111',do:''},
    { key: 7, name: '朝9晚6', nub: 32, type: '固定班制', date: '111',do:''},
];
//考勤组  end


//班次管理  start
let headrecord = [
    { title: '班次名称', dataIndex: 'name', key: 'name', width : 200 },
    { title: '考勤时间', dataIndex: 'date', key: 'date', render: () => <div className="time"><span>9:00-18:00</span><span>9:00-18:00</span><span>9:00-18:00</span></div> ,width : 400 },
    { title: '操作', dataIndex: 'do', key: 'do' ,render: () => <div className="do"><a>编辑</a> <a>删除</a></div> },
];
let classesdata = [
    { key: 1, name: '朝9晚6', date: '',do:''},
    { key: 2, name: '两班制', date: '',do:''},
    { key: 3, name: '朝10晚7', date: '',do:''},
]
//班次管理  end


let addkqcolumns = [
    {title: '工作日', dataIndex: 'name', width : 120},{title: '班次时间段',dataIndex: 'classes', width : 120},{title: '操作',dataIndex: 'do',render: ()=><a href="">更改班次</a> , width : 120}
    ];
let addkqdata = [
    { key: 1, name: '周1', classes: '休息',do:''},
    { key: 2, name: '周2', classes: '休息',do:''},
    { key: 3, name: '周3', classes: '休息',do:''},
    { key: 4, name: '周4', classes: '休息',do:''},
    { key: 5, name: '周5', classes: '休息',do:''},
    { key: 6, name: '周六', classes: '休息',do:''},
    { key: 7, name: '周日', classes: '休息',do:''},
];
export default class Attendancehome extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
        };
    }
    onSelectChange(selectedRowKeys){
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }



    handleClick(e){
        $(".leftcontent .all>li").css("display" , "none");
        if(e.key=="1"){
            $(".leftcontent .all>li:nth-child(1)").css("display" , "block");
        }
       if(e.key=="2"){
            console.log(2);
           $(".leftcontent .all>li:nth-child(2)").css("display" , "block");
       }
       if(e.key=="3"){
           console.log(3);
           $(".leftcontent .all>li:nth-child(3)").css("display" , "block");
       }
    }
    showkq(){
        $(".all").css("display" , "none");
        $(".addkq").css("display" , "block");
    }
    render(){
        let rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
            }),
        };
        return (
            <div>
               <div className="Attendancehome_title_box">
                   <div className="Attendancehome_title">考勤信息</div>
               </div>
                <div className="Attendancehome_content">
                    <Breadcrumb separator=">">
                    <Breadcrumb.Item href="/#/application">企业应用</Breadcrumb.Item>
                    <Breadcrumb.Item href="/#/application">考勤</Breadcrumb.Item>
                    <Breadcrumb.Item href="/#/application">考勤设置</Breadcrumb.Item>
                    <Breadcrumb.Item href="/#/Attendancehome">考勤管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="leftnav">
                        <Menu onClick={this.handleClick} style={{ width: 256 }} defaultSelectedKeys={['2']} defaultOpenKeys={['sub1']} mode="inline">
                            <Menu.Item key="9">考勤首页</Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>考勤设置</span></span>}>
                                    <Menu.Item key="1">考勤组管理</Menu.Item>
                                    <Menu.Item key="2">班次管理</Menu.Item>
                                    <Menu.Item key="3">加班规则</Menu.Item>

                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>考勤统计</span></span>}>
                                <Menu.Item key="4">月度汇报</Menu.Item>
                                <Menu.Item key="5">每日统计</Menu.Item>
                                <Menu.Item key="6">打卡时间</Menu.Item>
                                <Menu.Item key="7">原始记录</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="leftcontent">
                        <ul className="all">
                            <li className="leftcontent_title_box_attendance">
                                    <div className="leftcontent_title_box_attendance">
                                        <h3>考勤组管理</h3>
                                    </div>
                                    <div className="functions">
                                        <span className="add" onClick={this.showkq.bind(this)}><button>新增考勤组</button></span>
                                        <span className="search"><input type="text" placeholder="请输入考勤组名称"/><b>搜索</b></span>
                                    </div>
                                    <div className="tab">
                                        <Table columns={columns} dataSource={data} bordered/>
                                    </div>

                            </li>
                            <li className="leftcontent_title_box_classes">
                                <div className="leftcontent_title_box_classes">
                                    <h3>班次管理</h3>
                                </div>
                                <div className="functions">
                                    <span className="add"><Addbtn></Addbtn></span>
                                    <span className="search"><input type="text" placeholder="请输入班次组名称"/><b>搜索</b></span>
                                </div>
                                <div className="tab">
                                    <Table columns={headrecord} dataSource={classesdata} bordered/>
                                </div>
                            </li>
                        </ul>
                        <form action="" className="addkq">
                           <div className="addkq_box">
                               <div className="addkq_people">
                                    <div className="addkq_people_title">
                                        参与考勤人员信息:
                                    </div>
                                   <div className="addkq_people_title_box">
                                       <div><span><b>*</b>考勤组名称:</span><input type="text" placeholder="请输入考勤组名称"/></div>
                                       <div><span>参与考勤人员:</span><button>添加</button></div>
                                       <div><span>无需考勤人员:</span><button>添加</button></div>
                                       <div><span>考勤组负责人:</span><button>添加</button><span>协助管理员分管本考勤组内的考勤信息</span></div>
                                   </div>
                               </div>
                               <div className="addkq_type">
                                   <div className="addkq_type_title">
                                      考勤组类型:
                                   </div>
                                   <div className="addkq_type_title_box">
                                       <div>
                                           <span><b>*</b>考勤组类型:</span>
                                          <div>
                                              <input type="radio" name="type" defaultChecked="checked"/><span>按固定班制：所有人按相同时间打卡</span>
                                              <input type="radio" name="type"/><span>按班次上下班：不同人员按照各自的排班打卡</span>
                                              <input type="radio" name="type"/><span>自自上下班：所有人无时间限制，随时打卡，只计算旷工</span>
                                          </div>
                                           <div>
                                               <span>工作日设置:<span>快捷设置班次:休息 <a href="">更改班次</a></span></span>
                                               <Table rowSelection={rowSelection} columns={addkqcolumns} dataSource={addkqdata} pagination={false} bordered={false}/>
                                               <span><input type="checkbox"/>法定节假日自动排休</span>
                                           </div>
                                           <div>
                                               <span>特殊日期:</span>
                                               <div>
                                                   <div><button type="button">添加</button>必须打卡日期</div>
                                                   <div><button type="button">添加</button>不用打卡日期</div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="addkq_way">
                                   <div><span><b>*</b>打卡方式:</span><span>  打卡位置和打卡WIFI满足任意一项即可；</span></div>
                                   <div><span><b>*</b>打卡范围:</span><span>员工可见篮圈范围内</span></div>
                                   <div><span>无需考勤人员:</span><button>添加</button></div>
                                   <div><span>考勤组负责人:</span><button>添加</button><span>协助管理员分管本考勤组内的考勤信息</span></div>
                               </div>
                               <div className="addkq_rule"></div>
                               <div className="addkq_save"></div>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}