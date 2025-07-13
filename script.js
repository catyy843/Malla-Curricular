document.addEventListener("DOMContentLoaded", () => {
  const cursos = document.querySelectorAll(".curso");

  cursos.forEach(curso => {
    curso.addEventListener("click", () => {
      if (!curso.classList.contains("habilitado")) return;

      curso.classList.add("completado");
      curso.classList.remove("habilitado");

      const id = curso.id;
      switch(id) {
        case "fund_enf1":
          activar(["integ_prof1"]);
          break;
        case "quimica":
          activar(["bioquimica"]);
          break;
        case "biocel":
          activar(["histologia", "anatomia", "fisio_gen", "embriologia", "bioquimica"]);
          break;
        case "matematicas":
          activar(["investigacion1"]);
          break;
        case "fisica":
          activar(["fisio_gen", "investigacion1"]);
          break;
        case "sociales1":
          activar(["sociales2"]);
          break;
        case "educacion1":
          activar(["educacion2", "clinica_comunitaria"]);
          break;
        case "ingles1":
          activar(["ingles2"]);
          break;
        case "comunitaria1":
          activar(["comunitaria2", "clinica_comunitaria"]);
          break;
        case "integ_prof1":
          activar(["neonatologia1"]);
          break;
        case "bioquimica":
          activar(["farmacologia"]);
          break;
        case "embriologia":
          activar(["obstetricia1"]);
          break;
        case "fisio_gen":
          activar(["fund_enf2", "agentes", "neonatologia1", "fisio_sist", "obstetricia1", "inmunologia"]);
          break;
        case "anatomia":
          activar(["gineco_fisio", "fund_enf2", "agentes", "neonatologia1", "obstetricia1"]);
          break;
        case "histologia":
          activar(["gineco_fisio", "fund_enf2", "agentes", "neonatologia1", "obstetricia1"]);
          break;
        case "ingles2":
          activar(["ingles3"]);
          break;
        case "fund_enf2":
          activar(["integ_prof2"]);
          break;
        case "obstetricia1":
          activar(["obstetricia2"]);
          break;
        case "neonatologia1":
          activar(["neonatologia2"]);
          break;
        case "fisio_sist":
          activar(["gineco_fisio", "integ_prof2", "neonatologia2", "fisiopatologia", "reproduccion", "farmacologia", "obstetricia2"]);
          break;
        case "agentes":
          activar(["infectologia", "neonatologia2"]);
          break;
        case "sociales2":
          activar(["sociales3"]);
          break;
        case "ingles3":
          activar(["ingles4"]);
          break;
        case "neonatologia2":
          activar(["clinica_neonatal1", "clinica_primaria1", "clinica_partos1", "clinica_puerperio", "neonatologia3", "obstetricia_patologica"]);
          break;
        case "gineco_fisio":
          activar(["clinica_primaria1"]);
          break;
        case "obstetricia2":
          activar(["clinica_partos1", "clinica_puerperio", "neonatologia3", "obstetricia_patologica"]);
          break;
        case "integ_prof2":
          activar(["clinica_comunitaria", "clinica_neonatal1", "clinica_primaria1", "clinica_partos1", "clinica_puerperio"]);
          break;
        case "infectologia":
          activar(["clinica_neonatal1", "clinica_primaria1", "clinica_partos1", "clinica_puerperio"]);
          break;
        case "fisiopatologia":
          activar(["clinica_neonatal1", "clinica_primaria1", "clinica_partos1", "clinica_puerperio", "neonatologia3", "obstetricia_patologica"]);
          break;
        case "farmacologia":
          activar(["clinica_neonatal1", "clinica_primaria1", "clinica_partos1", "clinica_puerperio", "neonatologia3", "obstetricia_patologica"]);
          break;
        case "investigacion1":
          activar(["gestion1", "investigacion2"]);
          break;
        case "clinica_primaria1":
          activar(["gineco_patologica"]);
          break;
        case "modulo1":
          activar(["modulo2"]);
          break;
        case "neonatologia3":
          activar(["clinica_neonatal2", "medico_quirurgica"]);
          break;
        case "obstetricia_patologica":
          activar(["clinica_primaria2", "medico_quirurgica", "alto_riesgo"]);
          break;
        case "comunitaria2":
          activar(["clinica_primaria2"]);
          break;
        case "gestion1":
          activar(["gestion2"]);
          break;
        case "investigacion2":
          activar(["investigacion3"]);
          break;
        case "sociales3":
          activar(["sociales4"]);
          break;
        case "medico_quirurgica":
          activar(["clinica_medico_quirurgica", "clinica_neonatal2", "clinica_partos2", "alto_riesgo"]);
          break;
        case "gineco_patologica":
          activar(["clinica_primaria2", "clinica_medico_quirurgica"]);
          break;
        case "investigacion3":
          activar(["seminario1"]);
          break;
        case "clinica_neonatal2":
          activar(["internado_neonatologia"]);
          break;
        case "clinica_partos2":
          activar(["internado_obstetricia"]);
          break;
        case "clinica_primaria2":
          activar(["internado_primaria"]);
          break;
        case "alto_riesgo":
          activar(["internado_obstetricia"]);
          break;
        case "clinica_medico_quirurgica":
          activar(["internado_ginecologia"]);
          break;
        case "seminario1":
          activar(["seminario2"]);
          break;
      }
    });
  });

  function activar(ids) {
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.classList.contains("completado")) {
        el.classList.remove("bloqueado");
        el.classList.add("habilitado");
      }
    });
  }
});
