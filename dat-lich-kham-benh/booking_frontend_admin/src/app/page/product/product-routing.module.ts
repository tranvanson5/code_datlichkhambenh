import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizateGuard } from "src/app/base/core/guard/authorizate.guard";
import { ProductContainer } from "./product.container";
import { AuthGuard } from "src/app/base/core/guard/auth.guard";
import { ScannerContainer } from "./containers/scanner/scanner.container";
import { Authority } from "src/app/base/core/models/menu.model";

const routes: Routes = [
    {
        path: '',
        component: ProductContainer,
        canActivate: [AuthGuard, AuthorizateGuard],
        data: {
            authority: [Authority.ADMIN]
        }
    },
    {
        path: 'scanner',
        component: ScannerContainer,
        canActivate: [AuthGuard, AuthorizateGuard],
        data: {
            authority: [Authority.ADMIN, Authority.MANAGER]
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}