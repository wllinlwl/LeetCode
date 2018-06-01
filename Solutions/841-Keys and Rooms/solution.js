// Backtracking.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var dist = new Array(rooms.length);
    dist.fill(false);
    
    count = 0;
    return helper(rooms, 0, dist);
};
var count;
function helper(rooms, key, dist){
    if(dist[key]){
        return false;
    }
    dist[key] = true;
    if(++count >= rooms.length){
        return true;
    }
    
    for(var i = 0; i < rooms[key].length; i++){
        if(helper(rooms, rooms[key][i], dist)){
            return true;
        }
    }
    return false;
};