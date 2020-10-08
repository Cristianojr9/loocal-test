import React, { useEffect, useState } from 'react';

import api from '../../services/index';

export default function SectionExamples() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    async function loadPersonas() {
      try {
        const response = await api.get('');
        setPersonas(response.data);
      } catch {
        console.log('error');
      }
    }
    loadPersonas()
  }, []);

  console.log(personas);

  return (
    <div>

    </div>
  )
}
