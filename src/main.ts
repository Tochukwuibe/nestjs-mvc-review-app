import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as hbs from 'hbs';
import * as session from 'express-session';
import { SERVER_SECRETE, SESSION_LIFE_TIME, SESSION_NAME } from './config';
import * as express from 'express'

const hbs_helpers = {
  section: function (name, options) {
    if (!this._sections) this._sections = {};
    this._sections[name] = options.fn(this);
    return null;
  }
}

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'public', 'views'));

  hbs.registerPartials(join(__dirname, '..', 'public', 'views', 'partials'));
  hbs.registerHelper('section', hbs_helpers.section)
  app.setViewEngine('hbs');

  app.use(express.json());

  app.use(session({
    name: SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SERVER_SECRETE,
    cookie: {
      maxAge: SESSION_LIFE_TIME,
      sameSite: true,
      secure: process.env.NODE_ENV === 'production'
    }
  }))

  await app.listen(3000);

}
bootstrap();
