//Natteliv
		var club = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[amenity=nightclub];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/dancinghall.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});

		var bar = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[amenity=bar];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/bar-12.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
		var pub = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[amenity=pub];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/bar-12.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});

//Hotel
		var hotel = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[tourism=hotel];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/hotel.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
		var hostel = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[tourism=hostel];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/hostel.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
//post
		var postkasse = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[amenity=post_box];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/post.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});

		var post_office = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[amenity=post_office];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/post.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
//food
		var restaurant = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[amenity=restaurant];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/restaurant.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
		var fast_food = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[amenity=fast_food];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/fastfood.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});

		var cafe = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[amenity=cafe];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/cafe.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
//tourism
		var museum = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[tourism=museum];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/museum_paintings.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
		var artwork = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[tourism=artwork];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/statue.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
		var monument = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[historic=monument];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/statue.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
//Nature
		var park = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[leisure=park];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/urbanpark.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		
		var playground = L.layerJSON({
			url: 'http://overpass-api.de/api/interpreter?data=[out:json];node({lat1},{lon1},{lat2},{lon2})[leisure=playground];out;',
			propertyItems: 'elements',
			propertyTitle: 'tags.name',
			propertyLoc: ['lat','lon'],
			buildIcon: function(data, title) {
			return new L.Icon({
				iconUrl:'pics/playground.png',
				iconSize: new L.Point(30, 30),
				iconAnchor: new L.Point(18, 37),
				popupAnchor: new L.Point(0, -37)
				});
			},
			buildPopup: function(data, marker) {
				return data.tags.name || null;
			}
		});
		