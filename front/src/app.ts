/*
 * Copyright © 2018, Octave Online LLC
 *
 * This file is part of Octave Online Server.
 *
 * Octave Online Server is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * Octave Online Server is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Octave Online Server.  If not, see
 * <https://www.gnu.org/licenses/>.
 */

///<reference path='boris-typedefs/node/node.d.ts'/>
///<reference path='boris-typedefs/mime/mime.d.ts'/>

import Mime = require("mime");
import Config = require("./config");
import Mongo = require("./mongo");
import Passport = require("./passport_setup");
import ExpressApp = require("./express_setup");
import Middleware = require("./session_middleware");
import SocketIoApp = require("./socketio");

Mongo.connect((err)=>{
	if (err) {
		console.log("Error Connecting to Mongo", err);
		return;
	}

	console.log("Connected to Mongo");

	Passport.init();
	Middleware.init();
	ExpressApp.init();
	SocketIoApp.init();
});
