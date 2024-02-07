require_relative "hotel"

hilton = Hotel.new("Hilton", "New York", 300)
four_seasons = Hotel.new("Four Seasons", "London", 659)

p hilton.name
p hilton.city
p hilton.price
p hilton.booked
hilton.book_hotel
p hilton.booked
