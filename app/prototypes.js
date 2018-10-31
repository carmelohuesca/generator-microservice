Object.assign(String.prototype, {
    hashCode() {
        let hash = 0,
            i = 0,
            len = this.length;
        while (i < len) {
            hash = ((hash << 5) - hash + this.charCodeAt(i++)) << 0;
        }
        return hash;
    },
    hash() {
        return this.hashCode();
    },
    capitalize() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    camelize() {
        return this
            .replace(/\s(\w)/ig, (all, letter) => {
                return letter.toUpperCase();
            })
            .replace(/(^\w)/, ($1) => {
                return $1.toLowerCase();
            });
    },
    between(left, right) {
        const startPos = this.indexOf(left);
        const endPos = this.indexOf(right, startPos + left.length);
        return this.substring(startPos + left.length, endPos)
    },
    dasherize() {
        return this
            .trim()
            .replace(/([A-Z])/g, '-$1')
            .replace(/[-_\s]+/g, '-')
            .toLowerCase();
    },
    spaced() {
        return this
            .trim()
            .replace(/([A-Z])/g, ' $1')
            .replace(/[-_\s]+/g, ' ')
            .toLowerCase();
    },
    escapeHTML() {
        return this
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
});