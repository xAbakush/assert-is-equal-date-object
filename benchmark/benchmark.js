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

var bench = require( '@stdlib/bench-harness' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isEqualDateObject = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var date1;
	var date2;
	var bool;
	var i;
	values = [
		'5',
		'Date',
		new Date( 'December 31, 2024 23:59:59:999' ),
		new Date( '2024-12-31T23:59:59.999' ),
		NaN,
		true,
		false,
		null
	];
	date1 = new Date();
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		date2 = values[ i%values.length ];
		bool = isEqualDateObject( date1, date2 );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
