import { CommonModule, CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { NgSelectConfig, NgSelectModule } from "@ng-select/ng-select";
import { AgGridModule } from "ag-grid-angular";
import { CoreModule } from "src/app/base/core/core.module";
import { CreateUpdateProductComponent } from "./components/create-update-product/create-update-product.component";
import { FormSearchComponent } from "./components/form-search/form-search.component";
import { ProductCodeCellComponent } from "./components/product-code/product-code-cell.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductContainer } from "./product.container";
import { ActionComponent } from "./components/action/action.component";
import { ScannerContainer } from "./containers/scanner/scanner.container";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

const declarations: any = [
    ProductContainer,
    FormSearchComponent,
    CreateUpdateProductComponent,
    ProductCodeCellComponent,
    ActionComponent,
    ScannerContainer,
    ProductDetailComponent
]

const imports: any = [
    CoreModule,
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatDialogModule,
    AgGridModule
]

const entryComponents: any = [
    CreateUpdateProductComponent,
]

@NgModule({
    imports: imports,
    declarations: declarations,
    providers: [CurrencyPipe]
})
export class ProductModule {
    constructor(
        private ngSelectConfig: NgSelectConfig
    ) {
        this.ngSelectConfig.appendTo = 'body';
    }
}