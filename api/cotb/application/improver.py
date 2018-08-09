
def improve_joke(joke, first_name, last_name):
    """

    s/Chuck Norris/Ken Bedwell/g

    Convert this...
    {
      "category": null,
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "yM1IHwkzQce54Pfq1zemlg",
      "url": "https://api.chucknorris.io/jokes/yM1IHwkzQce54Pfq1zemlg",
      "value": "This is a Chuck Norris joke..."
    }

    Into this...
    {
      "id": "yM1IHwkzQce54Pfq1zemlg",
      "value": "This is a Ken Bedwell joke..."
    }
    """

    return {
        "id": joke['value']['id'],
        "value": joke['value']['joke'].replace("Chuck", first_name).replace("Norris", last_name)
    }


