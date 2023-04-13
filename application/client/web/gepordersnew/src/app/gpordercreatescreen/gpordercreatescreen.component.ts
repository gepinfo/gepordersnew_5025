import { Component, OnInit } from '@angular/core';
import { GpordercreatescreenService } from './gpordercreatescreen.service';

@Component({
  selector: 'app-gpordercreatescreen',
  templateUrl: './gpordercreatescreen.component.html',
  styleUrls: ['./gpordercreatescreen.component.scss'],
})

export class GpordercreatescreenComponent implements OnInit {
    public gporders:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        type: '',
        name: '',
        description: '',
        price: '',
        price_currency_type: '',
        cost: '',
        cost_currency_type: '',
        gephistoryid: '',
    }
    public order:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        type: '',
        orderstatus: '',
        name: '',
        description: '',
        attachments: '',
        gephistoryid: '',
    }

    constructor (
        private gpordercreatescreenService: GpordercreatescreenService,
    ) { }

    ngOnInit() {
        this.gporders.created_by = sessionStorage.getItem('email') || ''; 
        this.order.created_by = sessionStorage.getItem('email') || ''; 
    }
}