/**
 * This file is part of DrupalCon Mobile.
 *
 * DrupalCon Mobile is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DrupalCon Mobile is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DrupalCon Mobile.  If not, see <http://www.gnu.org/licenses/>.
 */

(function() {

  DrupalCon.ui.createDayWindow = function(tabGroup) {

    // Create table view data object.
    var data = [];
    data.push({
    	title:'Sunday, September 18th', 
    	titleShort:'September 18th', 
    	hasChild:true, 
    	color:'#000', 
    	backgroundColor:'#fff', 
    	barColor: '#414444', 
    	backgroundSelectedColor: '#999',
	    selectedBackgroundColor: '#999', 
    	scheduleListing: false, 
    	url: 'pages/2011-09-18.html'
    });
    data.push({
    	title:'Monday, September 19th', 
    	titleShort:'September 19th', 
    	hasChild:true, 
    	color:'#000', 
    	backgroundColor:'#fff', 
    	barColor: '#414444', 
    	backgroundSelectedColor: '#999',
	    selectedBackgroundColor: '#999',
    	start_date:'2011-09-19 00:00:00', 
    	end_date:'2011-09-20 00:00:00', 
    	scheduleListing: true
    });
    data.push({
    	title:'Tuesday, September 20th', 
    	titleShort:'September 20th', 
    	hasChild:true, 
    	color:'#000', 
    	backgroundColor:'#fff', 
    	barColor: '#414444', 
    	backgroundSelectedColor: '#999',
	    selectedBackgroundColor: '#999', 
    	start_date:'2011-09-20 00:00:00', 
    	end_date:'2011-09-21 00:00:00', 
    	scheduleListing: true
    });
    data.push({
    	title:'Hackathon', 
    	titleShort:'Hackathon', 
    	hasChild:true, 
    	color:'#000', 
    	backgroundColor:'#fff', 
    	barColor: '#414444', 
    	backgroundSelectedColor: '#999',
	    selectedBackgroundColor: '#999', 
    	scheduleListing: false, 
    	url: 'pages/hackathon.html'
    });

    var dayWindow = Titanium.UI.createWindow({
      id: 'win1',
      title: 'Schedule',
      backgroundColor: '#fff',
      barColor: '#414444'
    });

    // create table view
    var tableview = Titanium.UI.createTableView({
      data: data
    });

    // add table view to the window
    dayWindow.add(tableview);

    // create table view event listener
    tableview.addEventListener('click', function(e) {
        if (e.rowData.scheduleListing) {
          Codestrong.navGroup.open(DrupalCon.ui.createSessionsWindow({
          	titleShort: e.rowData.titleShort,
            title: e.rowData.title,
            start_date: e.rowData.start_date,
            end_date: e.rowData.end_date
          }), {animated:true});
        }
        else {
          Codestrong.navGroup.open(DrupalCon.ui.createHtmlWindow({
            title: e.rowData.titleShort,
            url: e.rowData.url
          }), {animated:true});
        }
      
    });

	if (isAndroid()) {
	   dayWindow.addEventListener('open', function() {
	     var buttons = [];
	     buttons.push({
	       title: "Update",
	       clickevent: function () {
	         Ti.fireEvent('drupalcon:update_data');
	       }
	     });
	     menu.init({
	       win: dayWindow,
	       buttons: buttons
	     });
	   });
	}

    return dayWindow;
  };

})();
