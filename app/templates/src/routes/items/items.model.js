const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const <%=model%>Schema = new Schema({
    id: Schema.ObjectId,
    name: String,
    date_created: {
        type: Date,
        default: Date.now
    }
});

const <%=model%> = mongoose.model('<%=model%>', <%=model%>Schema);

<%=model%>.find((err, items) => {
    if (items.length === 0) {
        new <%=model%>({
            name: 'Carmelo'
        }).save();
    }
});

module.exports.<%=model%> = <%=model%>;