package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  // Some test data that should be replaced with a database of some sort
  val projectData = new ProjectData("Projects","Here are some of the projects I have worked on or am currently working",
    Array(
    new ProjectCard("Website","Working on the website you're currently viewing","",""),
    new ProjectCard("Timetable Optimisation Solution","My dissertation for my third year at bangor university","","")
  ))

  def index = Action {
    Ok(views.html.index("Luke Collier")(projectData))
  }

}