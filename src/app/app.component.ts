import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Data: Array<any>;
  submitData;
  approveFlag = [];
  rejectFlag = [];
  status = [];
  textarea = [];
  disabledFlag = true;
  textareaFlag = false;
  sample;
  xyz
  abc
  justi = [];

  constructor() {
    this.Data = [
      { Company: 'Google', Contact: 'Raju', Country: 'US',Justification:'hi there this is a test env and we whant your' },
      { Company: 'Apple', Contact: 'Babu bhaiya', Country: 'UK',Justification:'2 hi there this is a test env and we whant your' },
      { Company: 'Amazon', Contact: 'Shyam', Country: 'IN',Justification:' 3 hi there this is a test env and we whant your' },
      { Company: 'Amazon', Contact: 'Shyam', Country: 'IN',Justification:' 4 hi there this is a test env and we whant your' }
    ];
    // this.sample = this.Data[0].Justification;
    //  this.xyz = this.sample.slice(0,20);
    this.justi = Array(this.Data.length).fill(true);
    
  }
  // justToggle(i){
  //   if(this.justi[i]){
  //     this.justi[i] = false;
  //     // this.xyz = this.sample
  //   }
  //   else{
  //     this.justi[i] = true;
  //     // this.xyz = this.sample.slice(0,20)
  //   }
  // }
  

  submit() {
    let resultData = [];
    let reqObj = []; // final array for API
    // this.submitData = this.Data.map(x => Object.assign({}, x));
    // for (let i = 0; i < this.submitData.length; i++) {
    //   delete this.submitData[i].Company;
    // }
    // console.log(this.submitData, 'removed array');
    this.Data.map((row, index) => {
      console.log(this.status[index]);
      const obj = {
        ...row,
        status: this.status[index] ? this.status[index] : null,
        comments: this.textarea[index] ? this.textarea[index] : null
      };

      resultData.push(obj);
    });
    console.log(resultData, 'resultData');
    const statusToRemove = null;

const filteredPeople = resultData.filter((item) => item.status !== statusToRemove);

    console.log(filteredPeople, 'reqObject');
  }

  refresh(len){
    for(let i = 0; i<=this.Data.length;i++){
      this.approveFlag[i] = false;
      this.rejectFlag[i] = false;
    }
    console.log("refresh works")
  }

  

  submitDisabled(){
    this.disabledFlag = false;
    
  }
  callAll(){
    this.submitDisabled();
    this.textareaFlag = true;
  }

  approve(len) {
    console.log('in approval all', len);
    for (var i = 0; i < len; i++) {
      this.rejectFlag[i] = false;
      this.approveFlag[i] = true;
      this.status[i] = 'Approve';
    }
    
  }
  Regenerate(i){
    const obj = {
      Company:this.Data[i].Company,
      Contact:this.Data[i].Contact,
      status:this.status[i],
      comments:this.textarea[i]
    }
    console.log(obj,"regenrate %%%")
  }

  reject(len) {
    for (var i = 0; i < len; i++) {
      this.rejectFlag[i] = true;
      this.approveFlag[i] = false;
      this.status[i] = 'Reject';
    }
   
  }
}
