import { STATUS } from 'src/app/base/_helpers/constant';
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SpecialistSearch } from '../../models/specialist.model';

@Component({
    selector: 'app-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss']
})
export class FormSearchSpecialistComponent implements OnInit {

    public formGroup: UntypedFormGroup;
    public status = STATUS

    @Output() search: EventEmitter<SpecialistSearch> = new EventEmitter();

    constructor(
        private fb: UntypedFormBuilder,
    ) {}

    public ngOnInit(): void {
        this.initForm();
        this.submit();
    }

    private initForm(): void {
        this.formGroup = this.fb.group({
            status: [null],
            name: [null]
        })
    }

    public submit(): void {
        this.search.emit(this.formGroup.value);
    }
}