import {bootstrap} from 'angular2/platform/browser';
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {GameEventsService} from './services/game-events.service';
import ApplicationComponent from './components/application/application';

bootstrap(ApplicationComponent, [HTTP_PROVIDERS, GameEventsService]);