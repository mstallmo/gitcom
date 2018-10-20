#![feature(plugin, decl_macro)]
#![plugin(rocket_codegen)]

#[macro_use]
extern crate diesel;
extern crate rocket;
extern crate rocket_igniter;

use rocket_igniter::engine::{CliCommand, Engine};

#[macro_use]
mod macros;
mod app;

fn rocket() -> rocket::Rocket {
    rocket::ignite().mount(
        "/",
        routes![app::index, app::files, app::catch_unknown_routes],
    )
    .attach(Engine::new(CliCommand::NPM))
}

fn main() {
    rocket().launch();
}
