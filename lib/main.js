/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isDateObject = require( '@stdlib/assert-is-date-object' );


// MAIN //

/**
* Tests if two arguments are both Date objects corresponding to the same date and time.
*
* @param {*} d1 - first value
* @param {*} d2 - second value
* @returns {boolean} boolean result
*
* @example
* var d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
* var d2 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
* var bool = isEqualDateObject( d1, d2 );
* // returns true
*
* @example
* var d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
* var d2 = new Date( 2024, 11, 31, 23, 59, 59, 78 );
* var bool = isEqualDateObject( d1, d2 );
* // returns false
*/
function isEqualDateObject( d1, d2 ) {
	return ( isDateObject( d1 ) && isDateObject( d2 ) && ( d1.getTime() === d2.getTime() ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = isEqualDateObject;
