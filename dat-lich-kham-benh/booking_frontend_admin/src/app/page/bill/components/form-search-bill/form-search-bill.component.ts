import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { BillModel } from "../../models/bill.model";

@Component({
    selector: 'app-form-search-bill',
    templateUrl: './form-search-bill.component.html',
    styleUrls: ['./form-search-bill.component.scss']
})
export class FormSearchBillComponent implements OnInit {

    public formGroup: UntypedFormGroup;
    @Output() public search: EventEmitter<BillModel> = new EventEmitter();

    constructor(
        private fb: UntypedFormBuilder,
    ) {}

    public ngOnInit(): void {
        this.initForm();
        this.doSearch();
    }

    public initForm(): void {
        this.formGroup = this.fb.group({
            idOrName: [null],
            createdDate: [null],
        })
    }

    public doSearch(): void {
        this.search.emit(this.formGroup.value);
    }
}