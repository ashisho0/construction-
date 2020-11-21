import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service'
import { WholeEmail } from './email.model';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  wholeEmail: WholeEmail;
  constructor(public emailService: EmailService, public router: Router) {
    this.wholeEmail = new WholeEmail({})
  }

  ngOnInit(): void {
  }



  submit() {
    this.emailService.sendEmail(this.wholeEmail)
      .subscribe((data: any) => {
        console.log('email Send Successfully', data)
        alert('Message has been sent')
        this.router.navigate(['/home']);
      }),
      ((err) => {
        console.log('Email sending failed')

      })
  }




}
