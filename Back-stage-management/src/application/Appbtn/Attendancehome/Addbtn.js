import React from "react";
import Addtime from "./Addtime.js";
import Delay from "./Delay.js";
import { Modal, Button , TimePicker} from 'antd';
const format = 'HH:mm';
import moment from 'moment';


import "./Addbtn.less";
export default class Addbtn extends React.Component {
    constructor(){
        super();
        this.state = {
            time: 0,
            visible: false,
            set_time_interval: false,
            set_rest_time: false,
            rest_start: null,
            rest_end: null,
            checked: true,
            shift_type: 1,
            start_1: 0,
            end_1: 0,
            no_clock_out: false,
            start_1_before: 0,
            end_1_delay: 0,
            permit_delay_seconde: null,
            late_seconde: null,
            absenteeism_seconde: null,
            is_stay_late: false,
            stay_late_come_late: {
                stay_late: null,
                come_late: null
            }
        }
    }
    changetimes(n){
        this.setState({
            time:n
        })
    }
    // changet(n){
    //     this.setState({
    //         rest_start:n
    //     })
    // }
    showModal(){
        this.setState({
            visible: true,
        });
    }
    change(time ,timeString){
        this.state.start_1 = timeString
    }
    changes(time ,timeString){
        this.state.end_1 = timeString
    }
    selectedone(){
        $(".clock_time ul li").css("border-color" ,"#ccc");
        $(".clock_time ul li").css("color" ,"#999");
        $(".clock_time ul li:nth-child(1)").css("border" , "1px solid #007aff");
        $(".clock_time ul li:nth-child(1)").css("color" , "#007aff");
        $(".clock_time_box ul li").css("display" , "block");
        $(".clock_time_box ul li:nth-child(2)").css("display" , "none");
        $(".clock_time_box ul li:nth-child(3)").css("display" , "none");
        $(".clock_time_box ul li:nth-child(4)").css("display" , "block");
        this.state.shift_type = 1;
    }
    selectedtwo(){
        $(".clock_time ul li").css("border-color" ,"#ccc");
        $(".clock_time ul li").css("color" ,"#999");
        $(".clock_time ul li:nth-child(2)").css("border" , "1px solid #007aff");
        $(".clock_time ul li:nth-child(2)").css("color" , "#007aff");
        $(".clock_time_box ul li").css("display" , "block");
        $(".clock_time_box ul li:nth-child(3)").css("display" , "none");
        $(".clock_time_box ul li:nth-child(4)").css("display" , "none");
        this.state.shift_type = 2;
    }
    selectedthree(){
        $(".clock_time ul li").css("border-color" ,"#ccc");
        $(".clock_time ul li").css("color" ,"#999");
        $(".clock_time ul li:nth-child(3)").css("border" , "1px solid #007aff");
        $(".clock_time ul li:nth-child(3)").css("color" , "#007aff");
        $(".clock_time_box ul li").css("display" , "block");
        $(".clock_time_box ul li:nth-child(4)").css("display" , "none");
        this.state.shift_type = 3;
    }

    hideModal(){
        var name = $(".addclasses_set input").val();//班次名称
        var shift_type = this.state.shift_type; //班次类型
        var set_time_interval = !this.state.set_time_interval;//是否设置打卡时间段
        var start_1 =this.state.start_1; //开始打卡时间
        var start_1_before = this.state.start_1_before;//多少分钟钱可以打卡
        var end_1 = this.state.end_1;//打卡结束时间
        var end_1_delay = this.state.end_1_delay;//多少分钟前可以打卡
        var  no_clock_out =this.state.no_clock_out;//下班是否需要打卡
        var set_rest_time = this.state.set_rest_time;//是否设置休息时间
        var rest_start = this.state.rest_start;//休息时间开始
        var rest_end = this.state.rest_end;//休息时间结束
        var permit_delay_seconde = parseFloat(this.state.permit_delay_seconde);//允许迟到分钟数
        var late_seconde = parseFloat(this.state.late_seconde);//严重迟到分钟数
        var absenteeism_seconde = parseFloat(this.state.absenteeism_seconde);//矿工分钟数
        var is_stay_late = this.state.is_stay_late;//是否晚走晚到
        var stay_late_come_late = this.state.stay_late_come_late;//晚走晚到时间
        var stay_late = parseFloat(this.state.stay_late_come_late.stay_late);//晚走时间
        var come_late = parseFloat(this.state.stay_late_come_late.come_late);//晚到时间
        console.log(name , set_time_interval ,shift_type,start_1 ,start_1_before ,end_1 ,end_1_delay ,set_rest_time ,rest_start,rest_end, no_clock_out  ,permit_delay_seconde,late_seconde,absenteeism_seconde,is_stay_late,stay_late_come_late,stay_late,come_late)
        // $.ajax({
        //     type:put,
        //     url: "http://192.168.1.136:7000/shift/add",
        //     data:{
        //         "name":"name",
        //         "set_time_interval":"set_time_interval",
        //         "shift_type":"shift_type",
        //         "start_1":"start_1",
        //         "start_1_before":"start_1_before",
        //         "end_1":"end_1",
        //         "end_1_delay":"end_1_delay",
        //         "set_rest_time":"set_rest_time",
        //         "rest_start":"rest_start",
        //         "rest_end":"rest_end",
        //         "no_clock_out":"no_clock_out",
        //         "permit_delay_seconde":"permit_delay_seconde",
        //         "absenteeism_seconde":"absenteeism_seconde",
        //         "stay_late_come_late":"stay_late_come_late",
        //         "is_stay_late":"is_stay_late",
        //         "stay_late":"stay_late",
        //         "come_late":"come_late",
        //         "late_seconde":"late_seconde"
        //     },
        //     success:function(){
        //         if(code == 0){
        //             this.setState({
        //                 visible: false,
        //             })
        //         }
        //     }
        // })
        this.setState({
                            visible: false,
                        })
    }
    shows(){

        this.setState({
            set_time_interval:!this.state.set_time_interval,
            checked :!this.state.checked
        })
        // this.hied()
        if(this.state.set_time_interval){
            $(".time_box").css("display" , "inline-block")
        }else{
            $(".time_box").css("display" , "none")
        }
    }
    checked(){
        checked :!this.state.checked
    }
    confirm() {
        Modal.confirm({
            okText: '确认',
            cancelText: '取消',
        });
    }
    check(){

        this.setState({
            no_clock_out:!this.state.no_clock_out
        })
    }
    blur1(){
        this.setState({
            start_1_before : this.state.time
        })
    }
    blur2(){
        this.setState({

            end_1_delay : this.state.time
        })
    }
    blur3(){
        this.setState({
            rest_start : this.state.time
        })
    }
    blur4(){
        this.setState({
            rest_end : this.state.time
        })
    }
    changerest(){
        this.setState({
            set_rest_time:!this.state.set_rest_time
        })
    }
    getvalue(){
        this.setState({
            permit_delay_seconde:$(".late").val()
        })
    }
    getvalue1(){
        this.setState({
            late_seconde:$(".grave").val()
        })
    }
    getvalue2(){
        this.setState({
            absenteeism_seconde:$(".absent").val()
        })
    }

    changelatecome(){
        this.state.stay_late_come_late.come_late=$(".latecome option:selected").text()
    }
    changelatestay(){
        this.state.stay_late_come_late.stay_late=$(".latestay option:selected").text()
    }
    clicktf(){
        this.setState({
            is_stay_late : !this.state.is_stay_late
        })
    }
    showhied(){
        if(this.state.is_stay_late){
            $(".late_box").css("display" , "none")
        }else{
            $(".late_box").css("display" , "block")
        }
    }
    render() {
        return (
            <div className="addbtn">
                <Button type="primary" onClick={this.showModal.bind(this)}>+新增班次</Button>
                    <Modal title="添加班次" visible={this.state.visible} onOk={this.hideModal.bind(this)} onCancel={this.hideModal.bind(this)} okText="确认" cancelText="取消" width="825px">
                    <div>
                        <form action="">
                            <div className="addclasses">
                                 <div>
                                     <div className="addclasses_set"><span>班次名称:</span><input type="text" placeholder="最多6个字符,字母、数字、汉字" /></div>
                                     <div className="clock_time"><span>设置改班次一天内上下班次数:</span>
                                         <ul>
                                             <li data-index="1" onClick={this.selectedone.bind(this)}>1天1次上下班</li>
                                             <li data-index="2" onClick={this.selectedtwo.bind(this)}>1天2次上下班</li>
                                             <li data-index="3" onClick={this.selectedthree.bind(this)}>1天3次上下班</li>
                                         </ul>
                                         <input type="checkbox" onChange={this.checked.bind(this)} checked={this.state.checked} value="checkbox" onClick={this.shows.bind(this)}/>打卡时段设置
                                     </div>
                                     <div className="clock_time_box">
                                         <ul>
                                             <li>
                                                 <div className="clock_time_1">
                                                     <span>第1次</span><span>上班:</span>
                                                     <div className="addtime">
                                                         <TimePicker defaultValue={moment('00:00', format)} format={format}  onChange={this.change.bind(this)}/>
                                                     </div>
                                                     <div className="time_box" onBlur={this.blur1.bind(this)}><Delay changetimes={this.changetimes.bind(this)}></Delay><span className="ml20">分钟前开始打卡</span></div>
                                                 </div>
                                                 <div className="clock_time_1"><span>下班:</span>
                                                     <div className="addtime">
                                                         <TimePicker defaultValue={moment('00:00', format)} format={format}  onChange={this.changes.bind(this)}/>
                                                     </div>
                                                     <div className="time_box" onBlur={this.blur2.bind(this)}><Delay changetimes={this.changetimes.bind(this)}></Delay><span className="ml20">分钟前开始打卡</span></div>
                                                 </div>
                                             </li>
                                             <li>
                                                 <div className="clock_time_2"><span>第2次</span><span>上班:</span><Addtime></Addtime><div className="time_box" onBlur={this.blur1.bind(this)}><Delay changetimes={this.changetimes.bind(this)}></Delay><span className="ml20">分钟前开始打卡</span></div></div>
                                                 <div className="clock_time_2"><span>下班:</span><Addtime></Addtime><div className="time_box"><Delay changetimes={this.changetimes.bind(this)}></Delay><span className="ml20">分钟前开始打卡</span></div></div>
                                             </li>
                                             <li>
                                                 <div className="clock_time_3"><span>第3次</span><span>上班:</span><Addtime></Addtime><div className="time_box"><Delay changetimes={this.changetimes.bind(this)}></Delay><span className="ml20">分钟前开始打卡</span></div></div>
                                                 <div className="clock_time_3"><span>下班:</span><Addtime></Addtime><div className="time_box"><Delay changetimes={this.changetimes.bind(this)}></Delay><span className="ml20">分钟前开始打卡</span></div></div>
                                             </li>
                                             <li>
                                                 <div className="clock_time_4" ><input type="checkbox" onClick={this.changerest.bind(this)}/><span>休息时间</span>
                                                     <span>休息开始:</span><Addtime></Addtime>
                                                 </div>
                                                 <div className="clock_time_5">
                                                     <span>休息结束:</span><Addtime></Addtime>
                                                 </div>
                                             </li>
                                             <li>
                                                 <span>合计工作时长9小时0分钟</span><span>(考勤统计工作时长及请假出差外出统计，会以此时间为准)</span>
                                             </li>
                                         </ul>
                                     </div>
                                     <div><input type="checkbox" onChange={this.check.bind(this)}/><span>下班不用打卡（开启后，下班不打卡也不会记作异常）</span></div>
                                 </div>
                                 <div>
                                     <div>人性化班次</div>
                                     <div><input type="checkbox"/><span>允许迟到分钟数</span><input className="late" type="number" onChange={this.getvalue.bind(this)}/></div>
                                     <div><input type="checkbox"/><span>严重迟到分钟数</span><input className="grave" onChange={this.getvalue1.bind(this)} type="number"/></div>
                                     <div><input type="checkbox"/><span>矿工迟到分钟数</span><input className="absent"  onChange={this.getvalue2.bind(this)}type="number"/></div>
                                 </div>
                                 <div>
                                     <input type="checkbox" onChange={this.clicktf.bind(this)} onClick={this.showhied.bind(this)}/><span>晚走晚到（第一天下班走太晚，第二天可以晚点到，仅支持固定班制内勤打卡）</span>
                                     <div className="late_box">
                                         <span>第一天晚走</span>
                                         <select onChange={this.changelatestay.bind(this)} className="latestay">
                                             <option>0</option>
                                             <option>1</option>
                                             <option>2</option>
                                             <option>3</option>
                                             <option>4</option>
                                         </select>
                                         <span>小时，</span><span>第二天可以晚到</span>
                                         <select onChange={this.changelatecome.bind(this)} className="latecome">
                                             <option>0</option>
                                             <option>1</option>
                                             <option>2</option>
                                             <option>3</option>
                                             <option>4</option>
                                         </select>
                                         <span>小时</span><span>第一天21:00下班，第二天10:00上班不算迟到</span>
                                     </div>
                                 </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}
