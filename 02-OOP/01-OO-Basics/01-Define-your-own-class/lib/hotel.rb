class Hotel
  attr_reader :name, :city, :price, :booked

  def initialize(name, city, price)
    @name = name
    @city = city
    @price = price
    @booked = false
  end

  def booked
    return @booked
  end

  def book_hotel
    @booked = true
  end
end
