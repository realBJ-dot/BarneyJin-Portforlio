terraform {
  backend "remote" {
    organization = "my-portfolio"

    workspaces {
      name = "my-portfolio"
    }
  }
}

resource "null_resource" "example" {
  triggers = {
    value = "A example resource that does nothing!"
  }
}
