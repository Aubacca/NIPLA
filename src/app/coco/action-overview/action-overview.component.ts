import { Component, OnInit, OnDestroy } from '@angular/core';

import { EventAction } from '../../models/event-action';
import { EventActionsService } from '../../services/event-actions.service';

@Component({
  selector: 'app-action-overview',
  templateUrl: './action-overview.component.html',
  styleUrls: ['./action-overview.component.css']
})
export class ActionOverviewComponent implements OnInit, OnDestroy {
  eventActions: EventAction[] = [];
  private eventActionsSubscription;

  public columns: Array<any> = [
    {title: 'Event', name: 'event'},
    {title: 'Action', name: 'action'},
    {title: 'Request', name: 'request'},
    {title: 'Country', name: 'country'},
    {title: 'Priority', name: 'priority', sort: 'asc'},
    {title: 'Primary Request Type', name: 'primaryRequestType'},
    {title: 'Phase', name: 'phase'},
    {title: 'Receipt Date', name: 'receiptDate'},
    {title: 'Due Date', name: 'dueDate'},
    {title: 'User', name: 'user'},
    {title: 'Role', name: 'role'},
  ];

  constructor(private eventActionsService: EventActionsService) { }

  ngOnInit() {
    this.loadEventActions();
  }

  ngOnDestroy() {
    this.eventActionsSubscription.unsubscribe();
  }

  loadEventActions() {
    this.eventActionsSubscription = this.eventActionsService.getEventActions()
      .subscribe(eventActions => {
        this.eventActions = eventActions;
      },
    error => console.error('ERROR: ', error),
    () => 'Event actions subscription ended.');
  }
}
