import React, { useEffect, useState } from 'react';
import Container from '../../components/atoms/Container';
import Input from '../../components/atoms/Input';
import Text from '../../components/atoms/Text';
import Button from '../../components/atoms/Button';

const WorkingHourCalculator = () => {
  const hourOptions = [4, 6, 8];
  const [selectedHour, setSelectedHour] = useState<number>(hourOptions[1]);
  const [lastEntry, setLastEntry] = useState<string>();
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [result, setResult] = useState<string>('00:00');

  useEffect(() => {
    if (Number(hour) > selectedHour) {
      setHour('00')
    }
  }, [hour, selectedHour])

  useEffect(() => {
    chrome.storage?.local?.get('lastEntry', (data) => {
      if (data.lastEntry) {
        setLastEntry(data.lastEntry)
      }
    })

    chrome.storage?.local?.get('hour', (data) => {
      if (data.hour) {
        setHour(data.hour)
      }
    })

    chrome.storage?.local?.get('minute', (data) => {
      if (data.minute) {
        setMinute(data.minute)
      }
    })
  }, [])

  function maskTime(value: string) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^([0-9][0-9])([0-9][0-9])/g, '$1:$2');
    return value;
  }

  const doWriteLastEntry = (value: string) => {
    if (value.length > 4) {
      setLastEntry(maskTime(value.replace(':', '').slice(0, 4)));
      return;
    }
    setLastEntry(maskTime(value));
    chrome.storage.local.set({ lastEntry: maskTime(value) });
  };

  const doWriteHour = (value: string) => {
    value = value.replace(/\D/g, '');
    if (Number(value) > selectedHour) {
      return;
    }
    setHour(`0${Number(value)}`);
    chrome.storage.local.set({ hour: `0${Number(value)}` });
  };

  const doWriteMinute = (value: string) => {
    if (Number(value) < 10) {
      setMinute(`0${Number(value)}`);
      chrome.storage.local.set({ minute: `0${Number(value)}` });
      return;
    }
    if (Number(value) > 59) {
      return;
    }
    setMinute(`${Number(value)}`);
    chrome.storage.local.set({ minute: `${Number(value)}` });
  };

  const onCalculate = () => {
    const time =
      Number(selectedHour) * 60 - (Number(hour) * 60 + Number(minute));
    const lastEntryH = lastEntry?.split(':')[0];
    const lastEntryM = lastEntry?.split(':')[1];

    const m = Number(lastEntryM) + time;
    const hEnd = Math.floor(m / 60);
    const tAdd = m - hEnd * 60;

    const minuteStr = Number(tAdd) < 10 ? `0${tAdd}` : tAdd

    const hourRes = Number(lastEntryH) + hEnd
    const hourStr = Number(hourRes) < 10 ? `0${Number(hourRes)}` : Number(hourRes)

    setResult(`${hourStr}:${minuteStr}`);
  };

  return (
    <Container width='100%' height='450px'>
      <Text size='xl' weight='bold' padding='0 0 5px 0'>
        Working Hour Calculator
      </Text>
      <Input
        width='360px'
        type='text'
        placeholder='hh:mm'
        label='Last Entry'
        padding='10px 0'
        value={lastEntry}
        onChange={(e) => doWriteLastEntry(e.target.value)}
      />
      <Container
        width='360px'
        height='auto'
        stx={{ display: 'flex', gap: '10px' }}
      >
        <Input
          key={'hour-input'}
          width='175px'
          type='text'
          label='Hour'
          placeholder='00'
          padding='10px 0'
          onChange={(e) => doWriteHour(e.target.value)}
          value={hour}
        />
        <Input
          key={'minute-input'}
          width='175px'
          type='text'
          label='Min'
          placeholder='00'
          padding='10px 0'
          onChange={(e) => doWriteMinute(e.target.value)}
          value={minute}
        />
      </Container>
      <Container height='auto'>
        Selected Working Hour: {`${selectedHour}`}
      </Container>
      <Container height='auto' stx={{ marginTop: '20px' }}>
        {hourOptions.map((option, _index) => (
          <Button
            key={`${_index}-option-button`}
            variant='outlined'
            size='small'
            onClick={() => setSelectedHour(option)}
            stx={{ marginRight: '10px' }}
          >
            {`${option}`}
          </Button>
        ))}
      </Container>
      <Container height='auto' stx={{ marginTop: '20px' }}>
        <Button variant='contained' size='small' onClick={onCalculate}>
          Calculate
        </Button>
      </Container>
      <Container
        width='360px'
        height='auto'
        stx={{ marginTop: '20px' }}
      >
        <Input
          width='360px'
          type='text'
          disabled
          placeholder='hh:mm'
          label='Time to Home'
          padding='10px 0'
          value={result}
        />
      </Container>
    </Container>
  );
};

export default WorkingHourCalculator;
