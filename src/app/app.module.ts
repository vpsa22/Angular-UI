import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigService } from './app-config.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HeaderComponent } from './common/components/header/header.component';
import { HeaderNavigationComponent } from './core/components/header-navigation/header-navigation.component';
import { LandingModule } from './core/components/landing/landing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './common/material/material.module';


const appInitializerFn = (appConfig: AppConfigService) => {
  return ():Promise<any> => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,          
    HeaderNavigationComponent         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,    
    MaterialModule, //removed declared in manding module        
    BrowserAnimationsModule,    
    LandingModule  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [NgModule, AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
