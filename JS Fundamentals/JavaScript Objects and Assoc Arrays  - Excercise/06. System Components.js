
function listSystemComponents(input) {

    let systemsList = new Map();

    for (let line of input) {

        let [systemName, component, subComponent] = line.split('|').map(e => e.trim());
        
        if (!systemsList.has(systemName)) {
            systemsList.set(systemName, new Map());
        }
        if (!systemsList.get(systemName).has(component)){
            systemsList.get(systemName).set(component, []);
        }
        systemsList.get(systemName).get(component).push(subComponent);
    }

    let result = Array.from(systemsList.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of result) {
        console.log(system);
        let componentsSorted = Array.from(systemsList.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            systemsList.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(systemsList.get(s1).size != systemsList.get(s2).size) {
            return systemsList.get(s2).size - systemsList.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return systemsList.get(system).get(c2).length - systemsList.get(system).get(c1).length;
    }
}

listSystemComponents([
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
]);