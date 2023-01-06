//  Copyright (c) 2023 Patsagorn Y.
//  This software is released under the MIT License.
//  https://opensource.org/licenses/MIT

import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (() => {
	throw redirect(300, '/'); // Redirect to home page
}) satisfies PageLoad;
