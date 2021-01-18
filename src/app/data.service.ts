import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export interface Size {
    size: string
}
export interface Colors {
    color: string
}
export interface Fabric {
    type: string
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() {
    }

    getSizeWomen(): Observable<Size[]> {
        let items = getMockSizeWomen();
        return of(items).pipe(delay(500));
    }
    getSizeMaiden(): Observable<Size[]> {
        let items = getMockSizeMaiden();
        return of(items).pipe(delay(500));
    }
    getSizeGirl(): Observable<Size[]> {
        let items = getMockSizeGirl();
        return of(items).pipe(delay(500));
    }
    getColors(): Observable<Colors[]> {
        let colors = getMockColors();
        return of(colors).pipe(delay(500));
    }
    getFabrics(): Observable<Fabric[]> {
        let colors = getMockFabrics();
        return of(colors).pipe(delay(500));
    }
}

function getMockSizeWomen() {
    return [
        {
            'size': '34'
        },
        {
            'size': '36'

        },
        {
            'size': '38'

        },
        {
            'size': '40'

        },
        {
            'size': '42'

        },
        {
            'size': '44'

        },
        {
            'size': '46'

        },
        {
            'size': '48'

        },
        {
            'size': '50'

        },
        {
            'size': '52'

        },
        {
            'size': '54'

        },
        {
            'size': 'מידות גדולות'

        }
    ]
}
function getMockSizeMaiden() {
    return [
        {
            'size': '20'
        },
        {
            'size': '22'
        },
        {
            'size': '24'
        },
        {
            'size': '26'
        },
        {
            'size': '28'
        },
        {
            'size': '30'
        },
        {
            'size': '32'
        }
    ]
}
function getMockSizeGirl() {
    return [
        {
            'size': '6'
        },
        {
            'size': '8'
        },
        {
            'size': '10'
        },
        {
            'size': '12'
        },
        {
            'size': '14'
        },
        {
            'size': '16'
        },
        {
            'size': '18'
        }
    ]
}
function getMockColors() {
    return [
        {
            'color': 'אדום'
        },
        {
            'color': 'אפור'
        },
        {
            'color': 'בורדו'
        },
        {
            'color': 'ברונזה'
        },
        {
            'color': 'ורוד'
        },
        {
            'color': 'זהב'
        },
        {
            'color': 'חום'
        },
        {
            'color': 'טורקיז'
        },
        {
            'color': 'ירוק'
        },
        {
            'color': 'כחול'
        },
        {
            'color': 'כסף'
        },
        {
            'color': 'כתום'
        }
        ,
        {
            'color': 'לבן'
        },
        {
            'color': 'סגול'
        }
        ,
        {
            'color': 'צהוב'
        },
        {
            'color': 'שחור'
        }
        , {
            'color': 'שמנת'
        },
        {
            'color': 'תכלת'
        }
    ]
}
function getMockFabrics() {
    return [
        {
            'type': 'קטיפה דקה'
        },
        {
            'type': 'קטיפה עבה'
        },
        {
            'type': 'שיפון'
        },
        {
            'type': 'רשת'
        },
        {
            'type': 'תחרה'
        },
        {
            'type': 'פייטים'
        },
        {
            'type': 'סטן מט'
        },
        {
            'type': 'סטן מבריק'
        },
        {
            'type': 'טולי'
        },
        {
            'type': 'משי'
        },
        {
            'type': 'לייקרה'
        },
        {
            'type': 'ברוקרד'
        }
    ]
}
