package controllers

/*
    Project: lukecollier
    Created by: Joker
    Created date: 16/01/2017
*/
class ProjectData(val title: String, val description: String, val projects: Array[ProjectCard])

class ProjectCard(val title: String, val description: String, val gitHubUrl: String, val projectUrl: String)