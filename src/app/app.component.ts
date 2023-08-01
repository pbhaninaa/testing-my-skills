import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TestingserviceService } from '../app/services/testingservice.service';
import { isValidForm } from '../app/validations'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing-my-skills';
  heading: any = "Testing my skills";

  //Our variebles 
  form: FormGroup = new FormGroup({});
  display: boolean = false;
  usernames: string[] = [];
  phones: string[] = [];
  dataBase: string[] = [];
  photo: string = ''
  video: string=''
  // my constructor 
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: TestingserviceService
  ) {

  }

  // this is the function that will be called when the form is submitted
  formBinding() {
    this.form = this.formBuilder.group({
      name: [''],
      surname: [''],
      experience: [''],
      email: [''],
      phone: [''],
      gender: [''],
      date: [''],
      img: [''],

    })
  }
  //==================img============================================
  selectedImage: string | undefined;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
    };

    reader.readAsDataURL(file);
  }
  // this is the function that will be called when the form is submitted
  submit() {
    this.video= this.form.value.img;
    console.log(this.dataBase);
    this.display = true
    if (isValidForm(this.form.value)) {
      if (this.usernames.includes(this.form.value.email) ||
        this.phones.includes(this.form.value.phone)) {
        alert('user already exists')
      } else {
        this.service.saveData(this.form.value).subscribe((data: any) => {
          alert('success')
          console.log(data)

        })
      }
    }
  }
  deleting = () => {
    alert('deleting')
    this.service.deleteAll(1).subscribe((data: any) => {
      alert('success')

    })
  }
  //================================
  API_key = 'eee13c9b68167c2fd6939a864fc2ddc0';
  find() {
    navigator.geolocation.getCurrentPosition((myLocationCoords) => {
      const { latitude, longitude } = myLocationCoords.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${this.API_key}`
      )
        .then((inde) => inde.json())
        .then((weatherData) => {
          console.log(weatherData);
          // setWeather(lutho);
          // ourd(lutho);
        });
    });
  }
  //================================
  ngOnInit(): void {
    this.find()
    this.video = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    // this.service.getData().subscribe((data: any) => {
    //   console.log(data)
    //   this.photo = data[data.length].img
    //   data.forEach((item: any) => {
    //     this.dataBase.push(item);
    //     this.usernames.push(item.email);
    //     this.phones.push(item.phone);
    //   })

    // });

    this.formBinding();
  }
}
